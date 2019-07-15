import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'WebpartAddAndDeleteItemWebPartStrings';
import WebpartAddAndDeleteItem from './components/WebpartAddAndDeleteItem';
import { IWebpartAddAndDeleteItemProps } from './components/IWebpartAddAndDeleteItemProps';

export interface IWebpartAddAndDeleteItemWebPartProps {
  description: string;
}

export default class WebpartAddAndDeleteItemWebPart extends BaseClientSideWebPart<IWebpartAddAndDeleteItemWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWebpartAddAndDeleteItemProps > = React.createElement(
      WebpartAddAndDeleteItem,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
