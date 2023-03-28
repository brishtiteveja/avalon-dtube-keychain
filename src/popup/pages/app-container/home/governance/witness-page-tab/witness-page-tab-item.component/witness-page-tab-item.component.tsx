import { Icons } from '@popup/icons.enum';
import moment from 'moment';
import React from 'react';
import Icon, { IconType } from 'src/common-ui/icon/icon.component';
import './witness-page-tab-item.component.scss';

type Props = {
  label: string;
  data: string | object;
  isDate?: boolean;
  extraClassName?: string;
  isUrl?: boolean;
};

const WitnessPageTabItemComponent = ({
  label,
  data,
  isDate,
  extraClassName,
  isUrl,
}: Props) => {
  const renderObject = (data: object) => {
    let items: JSX.Element[] = [];
    Object.entries(data).map(([key, value]) => {
      items.push(
        <div key={`${key}-${value}`} className={'row-information'}>
          <div className="label-subtitle">{key}</div>
          <div className="label-info-data">{value}</div>
        </div>,
      );
    });
    return items;
  };

  const goTo = (url: string) => {
    chrome.tabs.create({ url: url });
  };

  return (
    <div className="row-information">
      <div className="label-title">{label}</div>
      <div
        className={`row-line label-info-data ${extraClassName} ${
          isUrl ? 'url-clickeable' : ''
        }`}
        onClick={isUrl ? () => goTo(data as string) : () => {}}>
        {isDate
          ? `${moment(data).toDate()}`
          : typeof data === 'object'
          ? renderObject(data)
          : data}
        {isUrl && (
          <Icon
            name={Icons.OPEN_IN_NEW}
            type={IconType.OUTLINED}
            additionalClassName="small-icon"
          />
        )}
      </div>
    </div>
  );
};

export default WitnessPageTabItemComponent;
