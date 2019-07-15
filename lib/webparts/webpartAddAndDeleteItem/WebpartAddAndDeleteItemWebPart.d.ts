import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IWebpartAddAndDeleteItemWebPartProps {
    description: string;
}
export default class WebpartAddAndDeleteItemWebPart extends BaseClientSideWebPart<IWebpartAddAndDeleteItemWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
