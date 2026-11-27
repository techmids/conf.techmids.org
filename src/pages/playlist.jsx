import { useEffect } from "react"
import { useRouter } from "next/router"
import { PageMeta } from "@/components/PageMeta"

export default function PlaylistRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("https://open.spotify.com/playlist/05rO73guNC7FNENiWLWuWy")
  }, [router])

  return <PageMeta path="/playlist" noindex />
}
