import { Text, Field } from '@sitecore-content-sdk/nextjs';
import { NoDataFallback } from '@/utils/NoDataFallback';
import { EventInfoProps } from './event-info.props';

export const Default = ({ fields }: EventInfoProps) => {
  if (!fields) {
    return <NoDataFallback componentName="EventInfo" />;
  }

  return (
    <section className="mx-auto max-w-4xl rounded-lg border p-8">
      <Text tag="h2" field={fields.Title} className="mb-4 text-3xl font-bold" />

      <Text tag="p" field={fields.Description} className="text-gray-600" />
    </section>
  );
};

