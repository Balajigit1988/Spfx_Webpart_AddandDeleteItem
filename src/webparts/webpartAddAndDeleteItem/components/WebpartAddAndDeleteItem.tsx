import * as React from 'react';
import styles from './WebpartAddAndDeleteItem.module.scss';
import { IWebpartAddAndDeleteItemProps, IWebpartAddAndDeleteItemState } from './IWebpartAddAndDeleteItemProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class WebpartAddAndDeleteItem extends React.Component<IWebpartAddAndDeleteItemProps, IWebpartAddAndDeleteItemState, {}> {
  constructor(props){
    super(props);
    this.state = {
      footerMenuName: '',
      footerMenuUrl: '',
      editFooterMenuName: '',
      editFooterMenuUrl: '',
      errorMsg: false,
      footerMenu: [],
      editfooterMenuPanel: false,
      hideDialog:true,
      removeItem:undefined,
      indexData:0
    };
  }
  public componentDidMount(){
  }
  public render(): React.ReactElement<IWebpartAddAndDeleteItemProps> {
    return (
      <div className={ styles.webpartAddAndDeleteItem }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <div className={styles.adminSection}>
            <h2>Add and Remove Links</h2>
            <div className={styles.footerForm}>
            <div className={styles.errorColor}>{this.state.errorMsg ? 'Please Enter all the fields' : ''}</div>
              <div className={styles.footerFormField}>
                <TextField required={true} label="Link Name" value={this.state.footerMenuName} onChanged={this.updateFooterMenuName.bind(this)} />
                <TextField required={true} label="Link Url Path" value={this.state.footerMenuUrl} onChanged={this.updateFooterMenuUrl.bind(this)} />
                <div className={styles.footerFormButton}>
                  <PrimaryButton onClick={this.saveMenuList}>Save</PrimaryButton>
                </div>
              </div>
              <div className={styles.footerlinks}>
                {this.state.footerMenu.length > 0 ? 
                <table>
                  <tbody>
                    <tr>
                      <th>Menu Name</th>
                      <th>Menu Url Path</th>
                      <th></th>
                    </tr>
                    {this.state.footerMenu.map((item, index) => 
                     (
                        <tr key={index}>
                        
                        <td>{item.footerMenuName}</td>
                        <td>{item.footerMenuUrl}</td>
                        <td className={styles.footerlistButtons}>
                            <div onClick={()=>this.showFooterMenuPanel(index)}><Icon iconName={'PageEdit'}  title="Edit" /></div>
                            <div onClick={() => this.footerMenuDelete(index)}> <Icon iconName={'Delete'}  title="Delete" /></div>
                        </td>
                      </tr>

                     )
                    
                     )}
                  </tbody>
                </table>
                : '' }
                <Panel
                  isOpen={this.state.editfooterMenuPanel}
                  type={PanelType.smallFixedFar}
                  onDismiss={this.hidefooterMenuPanel}
                  headerText="Edit Footer Menu"
                  closeButtonAriaLabel="Close"
                  onRenderFooterContent={this.menuFooterPanelButton}
                  >
                    <div>
                      <div className={styles.errorColor}>{this.state.errorMsg }</div>
                      <div><TextField label="Menu Name" value={this.state.editFooterMenuName}  onChanged={this.editItemFooterMenuName.bind(this)} /></div>
                      <div><TextField label="URL" value={this.state.editFooterMenuUrl}  onChanged={this.editItemFooterMenuUrl.bind(this)} /></div>
                    </div>

                  </Panel>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: 'Delete',
            subText: 'Are you sure you want to delete the link ?'
          }}
          modalProps={{
            isBlocking: true,
            
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={this._confirmDelete.bind(this)} text="Yes" />
            <DefaultButton onClick={this._closeDialog.bind(this)} text="No" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  /* Menu Add fields */
  private updateFooterMenuName = (newMenuname: string): void  => {
    let stateCopy = { ...this.state };
    stateCopy.footerMenuName = newMenuname;
    this.setState(stateCopy);
  }
  private updateFooterMenuUrl = (newMenuUrl: string): void  => {
    let stateCopy = { ...this.state };
    stateCopy.footerMenuUrl = newMenuUrl;
    this.setState(stateCopy);
  }

   /* Menu edit fields */
   private editItemFooterMenuName = (editMenuname: string): void  => {
    let stateCopy = { ...this.state };
    stateCopy.editFooterMenuName = editMenuname;
    this.setState(stateCopy);
  }
  private editItemFooterMenuUrl = (editMenuUrl: string): void  => {
    let stateCopy = { ...this.state };
    stateCopy.editFooterMenuUrl = editMenuUrl;
    this.setState(stateCopy);
  }

  private _closeDialog(){
    this.setState({hideDialog:true});
  }

  private saveMenuList = () => {
    if(this.state.footerMenuName.length > 0 && this.state.footerMenuUrl.length > 0){
      let newMeuData = {
        footerMenuName: this.state.footerMenuName, 
        footerMenuUrl: this.state.footerMenuUrl
      };
      let menuData = this.state.footerMenu;
      menuData.push(newMeuData);
      
      let stateCopy = { ...this.state };
      stateCopy.errorMsg= false;
      stateCopy.footerMenu= menuData;
      stateCopy.footerMenuName= '';
      stateCopy.footerMenuUrl= '';
      this.setState(stateCopy);
      console.log(this.state.footerMenu);
    
    } else {
      let stateCopy = { ...this.state };
      stateCopy.errorMsg= true;
      this.setState(stateCopy);
    }
   
  }

  private _confirmDelete(){

    let removeitem = this.state.removeItem;
    let self=this;
    let deleteFooterItem = this.state.footerMenu;
    deleteFooterItem.splice(removeitem, 1);

    let stateCopy = { ...this.state };
    stateCopy.footerMenu= deleteFooterItem;
    stateCopy.hideDialog= true;
    this.setState(stateCopy);
    //delete the item from the list

  }

  /* Add new Menu panel */
  private showFooterMenuPanel = (index) => {
    let stateCopy = { ...this.state };
    stateCopy.editfooterMenuPanel= true;
    stateCopy.editFooterMenuName= this.state.footerMenu[index].footerMenuName;
    stateCopy.editFooterMenuUrl=  this.state.footerMenu[index].footerMenuUrl;
    stateCopy.indexData= index;
    this.setState(stateCopy);
  }

  private hidefooterMenuPanel = () => {
    let stateCopy = { ...this.state };
    stateCopy.errorMsg= false;
    stateCopy.editfooterMenuPanel= false;
    this.setState(stateCopy);
  }

  /* Add new Menu panel buttons */
  private menuFooterPanelButton = () => {
    return (
      <div className={styles.panelButtons}>
        <PrimaryButton onClick={this.footerMenuEdit} style={{ marginRight: '8px' }}>
          Save
        </PrimaryButton>
        <DefaultButton onClick={this.hidefooterMenuPanel}>Cancel</DefaultButton>
      </div>
    );
  }


  /* save menu */
  private footerMenuEdit = () => {
    if(this.state.editFooterMenuName.length > 0 && this.state.editFooterMenuUrl.length > 0){
      let getFooterMenu = this.state.footerMenu;
      getFooterMenu[this.state.indexData].footerMenuName = this.state.editFooterMenuName;
      getFooterMenu[this.state.indexData].footerMenuUrl = this.state.editFooterMenuUrl;

      let stateCopy = { ...this.state };
      stateCopy.errorMsg= false;
      stateCopy.footerMenu= getFooterMenu;
      stateCopy.editfooterMenuPanel= false;
      this.setState(stateCopy);
    } else {
      let stateCopy = { ...this.state };
      stateCopy.errorMsg= true;
      this.setState(stateCopy);
    }
  }



  /* delete menu */
  private footerMenuDelete = (index) => {
    this.setState({hideDialog:false, removeItem:index});
  }
}
