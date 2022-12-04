export class BaseUrls {

  public static readonly BASE_HREF: string = "http://localhost:8082";
  public static readonly FOODS_GROUPURL: string = "cuisines";
  public static readonly CUSTOMERS_GROUPURL: string = "customers";
  public static readonly ADMIN_GROUPURL: string = "admins";
  public static readonly ORDERS_GROUPURL: string = "orders";



  public static getUrl(key: string): string { return `${this.BASE_HREF}/${key}/get`; }
  public static getUrlById(key: string): string { return `${this.BASE_HREF}/${key}/get/{id}`; }
  public static getAddUrl(key: string): string { return `${this.BASE_HREF}/${key}/add`; }
  public static getUpdateUrl(key: string): string { return `${this.BASE_HREF}/${key}/update`; }
  public static getDeleteUrl(key: string): string { return `${this.BASE_HREF}/${key}/delete`; }
  public static getLoginUrl(key: string): string { return `${this.BASE_HREF}/${key}/login`; }




}