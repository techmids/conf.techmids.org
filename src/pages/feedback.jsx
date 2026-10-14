import { useEffect } from "react"
import { useRouter } from "next/router"
import { PageMeta } from "@/components/PageMeta"

export default function FeedbackRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("https://forms.gle/XVHfMHjFDTQjRBsH6")
  }, [router])

  return <PageMeta path="/feedback" noindex />
}
