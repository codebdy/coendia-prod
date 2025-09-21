import type { APIRoute } from "astro";
import type {
  SpamFilterRule,
  SpamFilterRuleBoolExp,
  SpamFilterRuleDistinctExp,
  SpamFilterRuleOrderBy,
} from "@rxdrag/rxcms-models";
import {
  EnquiryAssciations,
  
  //根据preview状态，生成不同的robots.txt内容
  