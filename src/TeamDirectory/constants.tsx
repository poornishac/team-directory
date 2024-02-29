export interface IObjProps<T> {
  [key: string]: T;
}

export interface MyObject {
  [key: string]: any;
}

export enum getRole {
  admin = "Administrator",
  member = "Members",
}

export const HeaderLabel = {
  team: "Team",
  searchPlaceholder: "Search",
};

export const UserCardLabel = {
  userImg: "User Image",
};

export const NoDataPageLabel = {
  noDataAvailable: {
    heading: "No Data Available",
    description: "Sorry, there is no data to display !",
  },
  errorPage: "Sorry Something went wrong !",
};

export const Add = {
  addIcon: "+",
};

export const wordMatcherRegEx = /[^ ]+<[^>]+>[^ ]+|[^ ]+/g;
