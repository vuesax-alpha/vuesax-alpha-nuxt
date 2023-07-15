import type { LoadingParams } from 'vuesax-alpha'

export function $loading (options?: LoadingParams) {
  return VsLoading.service(options)
}
