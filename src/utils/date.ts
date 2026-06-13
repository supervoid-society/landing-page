import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Formats a date to WIB (Asia/Jakarta) timezone.
 * @param date - Date to format
 * @param format - Dayjs format string
 * @returns Formatted string
 */
export const formatWIB = (date: string | Date = new Date(), format: string = "HH:mm:ss") => {
  return dayjs(date).tz("Asia/Jakarta").format(format);
};

export default dayjs;
