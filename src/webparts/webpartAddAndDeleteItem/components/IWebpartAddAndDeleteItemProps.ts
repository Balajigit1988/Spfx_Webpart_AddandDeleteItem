export interface IWebpartAddAndDeleteItemProps {
  description: string;
}

export interface IWebpartAddAndDeleteItemState {
  footerMenuName?: string;
  footerMenuUrl?: string;
  editFooterMenuName?:string;
  editFooterMenuUrl?:string;
  errorMsg?: boolean;
  footerMenu?: any[];
  editfooterMenuPanel?: boolean;
  indexData?:number;
  hideDialog:boolean;
  removeItem: number;
}