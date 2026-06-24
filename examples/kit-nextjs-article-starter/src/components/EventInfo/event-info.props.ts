import { Field } from '@sitecore-content-sdk/nextjs';

export type EventInfoProps = {
  fields?: {
    Title?: Field<string>;
    Description?: Field<string>;
  };
};
