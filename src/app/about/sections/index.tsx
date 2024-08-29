import { formatDate } from "@/lib/utils";

interface SectionDetail {
  title: string;
  company_name: string;
  company_location?: string;
  description?: string;
  duration?: string;
  start_date?: string;
  end_date?: string;
}

interface SectionProps {
  section_title: string;
  section_details: SectionDetail[];
}

export default function Section({
  section_title,
  section_details,
}: SectionProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-32 pt-6 first:pt-0">
      <div className="relative">
        <div className="flex items-center justify-start gap-1 text-xl font-medium md:sticky md:top-24 min-w-[7rem]">
          <span>{section_title}</span>
        </div>
      </div>
      <div className="flex-1 divide-y divide-neutral-200 dark:divide-neutral-800">
        {section_details.map((detail, index) => (
          <div key={index} className="space-y-3 py-6 first:pt-0 last:pb-0">
            <div>
              <div className="flex flex-wrap gap-2 gap-y-0 text-lg">
                <span className="font-medium">{detail.title}</span>
              </div>
              <div className="flex flex-wrap gap-2 gap-y-0 text-lg">
                <span className="text-neutral-600 dark:text-neutral-400">
                  {detail.company_name}
                </span>
                <span className="">
                  {detail.company_location && `· ${detail.company_location}`}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 gap-y-0 text-lg"></div>
              {detail.start_date && (
                <div className="space-x-3">
                  <span className="space-x-1">
                    {formatDate(detail.start_date || "", false)}
                    <span> - </span>
                    {detail.end_date ? (
                      formatDate(detail.end_date, false)
                    ) : (
                      <span className="text-green-700 dark:text-green-600">
                        Now
                      </span>
                    )}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {detail.duration}
                  </span>
                </div>
              )}
            </div>
            <div className="text-neutral-600 dark:text-neutral-400">
              {detail.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
