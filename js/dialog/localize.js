$("title").text(chrome.i18n.getMessage("keychain"));

$("#error-ok").text(chrome.i18n.getMessage("dialog_ok"));
$("#yes-unlock").text(chrome.i18n.getMessage("dialog_unlock"));
$("#no-unlock").text(chrome.i18n.getMessage("dialog_cancel"));

$("#tx_loading").prepend(chrome.i18n.getMessage("dialog_broadcasting"));

// Info titles
$("#username").prev("h3").text(chrome.i18n.getMessage("dialog_account"));
$("#proposal_ids")
  .prev("h3")
  .text(chrome.i18n.getMessage("dialog_proposal_ids"));
$("#approve").prev("h3").text(chrome.i18n.getMessage("dialog_approve"));
$("#wif").prev("h3").text(chrome.i18n.getMessage("dialog_key"));
$("#author").prev("h3").text(chrome.i18n.getMessage("dialog_author"));
$("#receiver").prev("h3").text(chrome.i18n.getMessage("dialog_receiver"));
$("#authorized_account")
  .prev("h3")
  .text(chrome.i18n.getMessage("dialog_auth_account"));
$("#authorized_key").prev("h3").text(chrome.i18n.getMessage("dialog_auth_key"));
$("#role").prev("h3").text(chrome.i18n.getMessage("dialog_role"));
$("#perm").prev("h3").text(chrome.i18n.getMessage("dialog_permlink"));
$("#weight").prev("h3").text(chrome.i18n.getMessage("dialog_weight"));
$("#custom_key").prev("h3").text(chrome.i18n.getMessage("dialog_key"));
$("#to").prev("h3").text(chrome.i18n.getMessage("dialog_to"));
$("#amount").prev("h3").text(chrome.i18n.getMessage("dialog_amount"));
$("#balance_title").text(chrome.i18n.getMessage("dialog_balance"));
$("#balance_after_title").text(chrome.i18n.getMessage("dialog_future_balance"));
$("#daily_pay").prev("h3").text(chrome.i18n.getMessage("dialog_daily_pay"));
$("#memo").prev("h3").text(chrome.i18n.getMessage("dialog_memo"));
$("#title").prev("h3").text(chrome.i18n.getMessage("dialog_title"));
$("#permlink").prev("h3").text(chrome.i18n.getMessage("dialog_permlink"));
$("#period_f").prev("h3").text(chrome.i18n.getMessage("dialog_period"));
$("#extensions").prev("h3").text(chrome.i18n.getMessage("dialog_extensions"));
$("#json_metadata").prev("h3").text(chrome.i18n.getMessage("dialog_meta"));
$("#parent_username").prev("h3").text(chrome.i18n.getMessage("dialog_pu"));
$("#parent_url").prev("h3").text(chrome.i18n.getMessage("dialog_pp"));
$("#delegatee").prev("h3").text(chrome.i18n.getMessage("dialog_delegatee"));
$("#amt_sp").prev("h3").text(chrome.i18n.getMessage("dialog_amount"));
$("#message_sign").prev("h3").text(chrome.i18n.getMessage("dialog_message"));
$("#witness").prev("h3").text(chrome.i18n.getMessage("dialog_witness"));
$("#proxy").prev("h3").text(chrome.i18n.getMessage("popup_proxy"));
$("#voteWit").prev("h3").text(chrome.i18n.getMessage("dialog_witness"));
$("#keys").prev("h3").text(chrome.i18n.getMessage("dialog_keys"));
$("#recurrence").prev("h3").text(chrome.i18n.getMessage("dialog_recurrence"));
$("#executions").prev("h3").text(chrome.i18n.getMessage("dialog_executions"));

// Buttons
$("#cancel").text(chrome.i18n.getMessage("dialog_cancel"));
$("#proceed").text(chrome.i18n.getMessage("dialog_confirm"));

//Togglable
$("#body_toggle").html(chrome.i18n.getMessage("dialog_body_toggle"));
$("#options_toggle").html(chrome.i18n.getMessage("dialog_options_toggle"));
$("#custom_data").html(chrome.i18n.getMessage("dialog_data_toggle"));

//options
$("#max_accepted_payout").prepend(chrome.i18n.getMessage("dialog_max_payout"));
$("#pct_sbd").prepend(chrome.i18n.getMessage("dialog_percentage_sbd"));
$("#allow_votes_div").prepend(chrome.i18n.getMessage("dialog_allow_votes"));
$("#curation_rewards").prepend(chrome.i18n.getMessage("dialog_allow_curation"));
$("#beneficiaries_div").prepend(chrome.i18n.getMessage("dialog_beneficiaries"));

// Register
$("#master_pwd").attr(
  "placeholder",
  chrome.i18n.getMessage("popup_html_new_password")
);
$("#confirm_master_pwd").attr(
  "placeholder",
  chrome.i18n.getMessage("popup_html_confirm")
);
$("#submit_master_pwd").html(chrome.i18n.getMessage("popup_html_submit"));
