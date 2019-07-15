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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import styles from './WebpartAddAndDeleteItem.module.scss';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
var WebpartAddAndDeleteItem = /** @class */ (function (_super) {
    __extends(WebpartAddAndDeleteItem, _super);
    function WebpartAddAndDeleteItem(props) {
        var _this = _super.call(this, props) || this;
        /* Menu Add fields */
        _this.updateFooterMenuName = function (newMenuname) {
            var stateCopy = __assign({}, _this.state);
            stateCopy.footerMenuName = newMenuname;
            _this.setState(stateCopy);
        };
        _this.updateFooterMenuUrl = function (newMenuUrl) {
            var stateCopy = __assign({}, _this.state);
            stateCopy.footerMenuUrl = newMenuUrl;
            _this.setState(stateCopy);
        };
        /* Menu edit fields */
        _this.editItemFooterMenuName = function (editMenuname) {
            var stateCopy = __assign({}, _this.state);
            stateCopy.editFooterMenuName = editMenuname;
            _this.setState(stateCopy);
        };
        _this.editItemFooterMenuUrl = function (editMenuUrl) {
            var stateCopy = __assign({}, _this.state);
            stateCopy.editFooterMenuUrl = editMenuUrl;
            _this.setState(stateCopy);
        };
        _this.saveMenuList = function () {
            if (_this.state.footerMenuName.length > 0 && _this.state.footerMenuUrl.length > 0) {
                var newMeuData = {
                    footerMenuName: _this.state.footerMenuName,
                    footerMenuUrl: _this.state.footerMenuUrl
                };
                var menuData = _this.state.footerMenu;
                menuData.push(newMeuData);
                var stateCopy = __assign({}, _this.state);
                stateCopy.errorMsg = false;
                stateCopy.footerMenu = menuData;
                stateCopy.footerMenuName = '';
                stateCopy.footerMenuUrl = '';
                _this.setState(stateCopy);
                console.log(_this.state.footerMenu);
            }
            else {
                var stateCopy = __assign({}, _this.state);
                stateCopy.errorMsg = true;
                _this.setState(stateCopy);
            }
        };
        /* Add new Menu panel */
        _this.showFooterMenuPanel = function (index) {
            var stateCopy = __assign({}, _this.state);
            stateCopy.editfooterMenuPanel = true;
            stateCopy.editFooterMenuName = _this.state.footerMenu[index].footerMenuName;
            stateCopy.editFooterMenuUrl = _this.state.footerMenu[index].footerMenuUrl;
            stateCopy.indexData = index;
            _this.setState(stateCopy);
        };
        _this.hidefooterMenuPanel = function () {
            var stateCopy = __assign({}, _this.state);
            stateCopy.errorMsg = false;
            stateCopy.editfooterMenuPanel = false;
            _this.setState(stateCopy);
        };
        /* Add new Menu panel buttons */
        _this.menuFooterPanelButton = function () {
            return (React.createElement("div", { className: styles.panelButtons },
                React.createElement(PrimaryButton, { onClick: _this.footerMenuEdit, style: { marginRight: '8px' } }, "Save"),
                React.createElement(DefaultButton, { onClick: _this.hidefooterMenuPanel }, "Cancel")));
        };
        /* save menu */
        _this.footerMenuEdit = function () {
            if (_this.state.editFooterMenuName.length > 0 && _this.state.editFooterMenuUrl.length > 0) {
                var getFooterMenu = _this.state.footerMenu;
                getFooterMenu[_this.state.indexData].footerMenuName = _this.state.editFooterMenuName;
                getFooterMenu[_this.state.indexData].footerMenuUrl = _this.state.editFooterMenuUrl;
                var stateCopy = __assign({}, _this.state);
                stateCopy.errorMsg = false;
                stateCopy.footerMenu = getFooterMenu;
                stateCopy.editfooterMenuPanel = false;
                _this.setState(stateCopy);
            }
            else {
                var stateCopy = __assign({}, _this.state);
                stateCopy.errorMsg = true;
                _this.setState(stateCopy);
            }
        };
        /* delete menu */
        _this.footerMenuDelete = function (index) {
            _this.setState({ hideDialog: false, removeItem: index });
        };
        _this.state = {
            footerMenuName: '',
            footerMenuUrl: '',
            editFooterMenuName: '',
            editFooterMenuUrl: '',
            errorMsg: false,
            footerMenu: [],
            editfooterMenuPanel: false,
            hideDialog: true,
            removeItem: undefined,
            indexData: 0
        };
        return _this;
    }
    WebpartAddAndDeleteItem.prototype.componentDidMount = function () {
    };
    WebpartAddAndDeleteItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.webpartAddAndDeleteItem },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("div", { className: styles.adminSection },
                            React.createElement("h2", null, "Add and Remove Links"),
                            React.createElement("div", { className: styles.footerForm },
                                React.createElement("div", { className: styles.errorColor }, this.state.errorMsg ? 'Please Enter all the fields' : ''),
                                React.createElement("div", { className: styles.footerFormField },
                                    React.createElement(TextField, { required: true, label: "Link Name", value: this.state.footerMenuName, onChanged: this.updateFooterMenuName.bind(this) }),
                                    React.createElement(TextField, { required: true, label: "Link Url Path", value: this.state.footerMenuUrl, onChanged: this.updateFooterMenuUrl.bind(this) }),
                                    React.createElement("div", { className: styles.footerFormButton },
                                        React.createElement(PrimaryButton, { onClick: this.saveMenuList }, "Save"))),
                                React.createElement("div", { className: styles.footerlinks },
                                    this.state.footerMenu.length > 0 ?
                                        React.createElement("table", null,
                                            React.createElement("tbody", null,
                                                React.createElement("tr", null,
                                                    React.createElement("th", null, "Menu Name"),
                                                    React.createElement("th", null, "Menu Url Path"),
                                                    React.createElement("th", null)),
                                                this.state.footerMenu.map(function (item, index) {
                                                    return (React.createElement("tr", { key: index },
                                                        React.createElement("td", null, item.footerMenuName),
                                                        React.createElement("td", null, item.footerMenuUrl),
                                                        React.createElement("td", { className: styles.footerlistButtons },
                                                            React.createElement("div", { onClick: function () { return _this.showFooterMenuPanel(index); } },
                                                                React.createElement(Icon, { iconName: 'PageEdit', title: "Edit" })),
                                                            React.createElement("div", { onClick: function () { return _this.footerMenuDelete(index); } },
                                                                " ",
                                                                React.createElement(Icon, { iconName: 'Delete', title: "Delete" })))));
                                                })))
                                        : '',
                                    React.createElement(Panel, { isOpen: this.state.editfooterMenuPanel, type: PanelType.smallFixedFar, onDismiss: this.hidefooterMenuPanel, headerText: "Edit Footer Menu", closeButtonAriaLabel: "Close", onRenderFooterContent: this.menuFooterPanelButton },
                                        React.createElement("div", null,
                                            React.createElement("div", { className: styles.errorColor }, this.state.errorMsg),
                                            React.createElement("div", null,
                                                React.createElement(TextField, { label: "Menu Name", value: this.state.editFooterMenuName, onChanged: this.editItemFooterMenuName.bind(this) })),
                                            React.createElement("div", null,
                                                React.createElement(TextField, { label: "URL", value: this.state.editFooterMenuUrl, onChanged: this.editItemFooterMenuUrl.bind(this) })))))))))),
            React.createElement(Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                    type: DialogType.normal,
                    title: 'Delete',
                    subText: 'Are you sure you want to delete the link ?'
                }, modalProps: {
                    isBlocking: true,
                } },
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { onClick: this._confirmDelete.bind(this), text: "Yes" }),
                    React.createElement(DefaultButton, { onClick: this._closeDialog.bind(this), text: "No" })))));
    };
    WebpartAddAndDeleteItem.prototype._closeDialog = function () {
        this.setState({ hideDialog: true });
    };
    WebpartAddAndDeleteItem.prototype._confirmDelete = function () {
        var removeitem = this.state.removeItem;
        var self = this;
        var deleteFooterItem = this.state.footerMenu;
        deleteFooterItem.splice(removeitem, 1);
        var stateCopy = __assign({}, this.state);
        stateCopy.footerMenu = deleteFooterItem;
        stateCopy.hideDialog = true;
        this.setState(stateCopy);
        //delete the item from the list
    };
    return WebpartAddAndDeleteItem;
}(React.Component));
export default WebpartAddAndDeleteItem;
//# sourceMappingURL=WebpartAddAndDeleteItem.js.map