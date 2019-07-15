/// <reference types="react" />
import * as React from 'react';
import { IWebpartAddAndDeleteItemProps, IWebpartAddAndDeleteItemState } from './IWebpartAddAndDeleteItemProps';
export default class WebpartAddAndDeleteItem extends React.Component<IWebpartAddAndDeleteItemProps, IWebpartAddAndDeleteItemState, {}> {
    constructor(props: any);
    componentDidMount(): void;
    render(): React.ReactElement<IWebpartAddAndDeleteItemProps>;
    private updateFooterMenuName;
    private updateFooterMenuUrl;
    private editItemFooterMenuName;
    private editItemFooterMenuUrl;
    private _closeDialog();
    private saveMenuList;
    private _confirmDelete();
    private showFooterMenuPanel;
    private hidefooterMenuPanel;
    private menuFooterPanelButton;
    private footerMenuEdit;
    private footerMenuDelete;
}
