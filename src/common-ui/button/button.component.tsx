import React from 'react';
import { NewIcons } from 'src/common-ui/icons.enum';
import { SVGIcon } from 'src/common-ui/svg-icon/svg-icon.component';

export enum ButtonType {
  IMPORTANT = 'important',
  ALTERNATIVE = 'alternative',
}

export interface ButtonProps {
  onClick: () => void;
  label: string;
  skipLabelTranslation?: boolean;
  labelParams?: string[];
  logo?: NewIcons;
  type?: ButtonType;
  dataTestId?: string;
  additionalClass?: string;
  height?: 'tall' | 'medium' | 'small';
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <button
      data-testid={props.dataTestId}
      className={`submit-button ${
        props.type ? props.type : ButtonType.IMPORTANT
      }  ${props.additionalClass ?? ''} ${props.height ?? 'medium'}`}
      onClick={props.onClick}>
      <div className="button-label">
        {props.skipLabelTranslation
          ? props.label
          : chrome.i18n.getMessage(props.label, props.labelParams)}{' '}
      </div>
      {props.logo && <SVGIcon icon={props.logo} className="logo" />}
    </button>
  );
};

export default ButtonComponent;
