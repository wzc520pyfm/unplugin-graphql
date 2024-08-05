import { createFilter } from '@rollup/pluginutils'
import loader from 'graphql-tag/loader.js'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { toESModules } from './core/to-es-modules'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
  // path filter
  const filter = createFilter(options.include, options.exclude)
  // only .graphql, .graphqls (schema), and .gql files
  const filterExt = /\.(graphqls?|gql)$/i

  return {
    name: 'unplugin-graphql',
    transform(source, id) {
      if (!filter(id))
        return null
      if (!filterExt.test(id))
        return null

      // XXX: this.cachable() in graphql-tag/loader
      const code = toESModules(
        loader.call(
          {
            cacheable() {},
          },
          source,
        ),
      )

      const map = { mappings: '' } as any

      return {
        code,
        map,
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
