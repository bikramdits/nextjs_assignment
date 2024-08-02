import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"
import { appConstants } from "./utils"

export default getRequestConfig(async () => {
  const locale = cookies().get(appConstants.LOCALE_COOKIE)?.value|| 'en';

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})
