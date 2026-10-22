import { useEffect } from "react"
import { useRouter } from "next/router"
import { PageMeta } from "@/components/PageMeta"

export default function FlyersRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  }, [router])

  return <PageMeta path="/flyer" noindex />
}
