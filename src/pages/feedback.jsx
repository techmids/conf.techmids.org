import { useEffect } from "react"
import { useRouter } from "next/router"

export default function FeedbackRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("https://forms.gle/XVHfMHjFDTQjRBsH6")
  }, [router])

  return null
}
