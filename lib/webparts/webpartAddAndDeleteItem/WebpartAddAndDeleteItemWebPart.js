var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'WebpartAddAndDeleteItemWebPartStrings';
import WebpartAddAndDeleteItem from './components/WebpartAddAndDeleteItem';
var WebpartAddAndDeleteItemWebPart = /** @class */ (function (_super) {
    __extends(WebpartAddAndDeleteItemWebPart, _super);
    function WebpartAddAndDeleteItemWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebpartAddAndDeleteItemWebPart.prototype.render = function () {
        var element = React.createElement(WebpartAddAndDeleteItem, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    WebpartAddAndDeleteItemWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(WebpartAddAndDeleteItemWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    WebpartAddAndDeleteItemWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return WebpartAddAndDeleteItemWebPart;
}(BaseClientSideWebPart));
export default WebpartAddAndDeleteItemWebPart;
//# sourceMappingURL=WebpartAddAndDeleteItemWebPart.js.map