
export type RESULT = {
  [key: string]: number
}
export interface RECORDS_OBJECT {
  [key: string]: number
}
export interface Topic {
  [date: string]: {
    [key: string]: string;
  };
}
export interface SETTING_FORM {
  isOpenDotForNewTopic: boolean;
}
export interface TOPIC_ARRAY { key: string, value: string }
export interface CHOICE_TOPIC_ARRAY {
  [key: string]: string[]
}
export type OBJECT_STANDARD = {
  [key: string]: string;
}