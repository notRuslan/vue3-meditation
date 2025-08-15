export interface ISummary {
  total_anxiety: number;
  total_calm: number;
  total_focus: number;
  total_minutes: number;
  total_relax: number;
}

export interface CardData {
  iconFill: string;
  bgColor: string;
  paramValue: number;
  description: string;
}

export interface Cards {
  [key: string]: CardData;
}
