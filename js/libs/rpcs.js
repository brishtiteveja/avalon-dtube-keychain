class Rpcs {
  constructor() {
    this.currentRpc = "https://avalon.d.tube/";
    this.awaitRollback = false;
    this.DEFAULT_RPC_API = "https://avalon.d.tube/";
    this.list = this.initList();
    this.isTestnet = false;
    //hive.config.set("rebranded_api", true);
  }
  getCurrent() {
    return this.currentRpc;
  }
  async initList() {
    let listRPC = [];
    const RPCs = [
      { uri: "DEFAULT", testnet: false },
      { uri: "https://dtube.fso.ovh/", testnet: false },
      { uri: "https://api.avalonblocks.com/", testnet: false },
      { uri: "https://avalon.d.tube/", testnet: false },
      { uri: "https://dtube.club/testnetapi/", testnet: true },
      { uri: "https://testnet.dtube.fso.ovh/", testnet: true }
    ];

    return new Promise((resolve) => {
      chrome.storage.local.get(["rpc", "current_rpc"], (items) => {
        const local = items.rpc;
        if (local) {
          listRPC = JSON.parse(local)
            .map((e) => {
              if (typeof e === "string") {
                return { uri: e, testnet: false };
              } else return e;
            })
            .concat(RPCs);
        } else {
          listRPC = RPCs;
        }

        let currentrpc = items.current_rpc || RPCs[0];

        if (typeof currentrpc === "string") {
          currentrpc = currentrpc.replace("(TESTNET)", "");
          const currentRPCFromList = listRPC.find(
            (rpc) => rpc.uri.trim() === currentrpc.trim()
          );
          currentrpc = currentRPCFromList;
        }

        const list = [
          ...listRPC.filter((rpc) => {
            return rpc.uri.trim() != currentrpc.uri.trim();
          }),
        ];
        list.unshift(currentrpc);

        resolve(list);
      });
    });
  }

  async isTestnet() {
    return this.isTestnet;
  }

  async getList() {
    return await this.initList();
  }

  async setOptions(rpc, awaitRollback = false) {
    rpc = rpc.replace("(TESTNET)", "").trim();
    if (rpc === this.currentRpc) {
      return;
    }
    const list = await this.getList();
    const newRpcObj = list.find((e) => e.uri.trim() === rpc.trim());

    const newRpc = newRpcObj
      ? newRpcObj
      : list.find((e) => e.uri.trim() === this.currentRpc.trim());

    if (newRpc.testnet) {
      /*hive.api.setOptions({
        url: newRpc.uri,
        transport: "http",
        useAppbaseApi: true,
      });*/
      //hive.config.set("address_prefix", "TST");
      //hive.config.set("chain_id", newRpc.chainId);
    } else {
      console.log("reset chain id");
      //hive.config.set("address_prefix", "STM");
      /*hive.config.set(
        "chain_id",
        "beeab0de00000000000000000000000000000000000000000000000000000000"
      );*/

      if (newRpc.uri.trim() === "DEFAULT") {
        let rpc;
        try {
          rpc = (await this.getDefaultRPC()).rpc || this.list[1].uri;
          console.log(`Using ${rpc} as default.`);
        } catch (e) {
          rpc = "https://avalon.d.tube/";
        }

        /*hive.api.setOptions({
          url: rpc,
          useAppbaseApi: true,
        });
        */
      } else {
        /*
        hive.api.setOptions({
          url: newRpc.uri,
          useAppbaseApi: true,
        });
        */
        rpc = newRpc.uri;
      }
    }
    this.previousRpc = this.currentRpc;
    this.currentRpc = newRpc.uri;
    this.isTestnet = newRpc.testnet;
    console.log(`Now using ${this.currentRpc}, previous: ${this.previousRpc}`);
    this.awaitRollback = awaitRollback;

    return;
  }

  rollback() {
    if (this.awaitRollback) {
      console.log("Rolling back to user defined rpc");
      this.setOptions(this.previousRpc);
      this.awaitRollback = false;
    }
    return;
  }

  async getDefaultRPC() {
    return $.ajax({
      url: this.DEFAULT_RPC_API,
      type: "GET",
    });
  }
}
