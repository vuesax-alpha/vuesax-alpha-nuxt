import AllComponents from 'vuesax-alpha/es/component'
import * as AllIcons from '@vuesax-alpha/icons-vue'
import type { Component } from 'vue'
import type { IdInjectionContext } from 'vuesax-alpha'
import type { Options, PresetDirectives, PresetImport } from './types'

export const libraryName = 'vuesax-alpha'

export const iconLibraryName = '@vuesax-alpha/icons-vue'

const allComponents = (AllComponents as unknown as Component[]).map(
  item => item.name!
)

export const allIcons = Object.keys(AllIcons)

export const allImportsWithStyle: string[] = ['VsLoading', 'VsNotification']

const allImports: PresetImport[] = allImportsWithStyle

const allNoStylesComponents: string[] = []

const allDirectives: PresetDirectives = {
  Loading: ['VsLoading'],
  InfiniteScroll: 'VsInfiniteScroll'
}

const allSubComponents: Record<string, string[]> = {
  VsButton: ['VsButtonGroup'],
  VsCard: ['VsCardGroup'],
  VsCheckbox: ['VsCheckboxGroup'],
  VsNavbar: ['VsNavbarItem', 'VsNavbarGroup'],
  VsSelect: ['VsOption', 'VsOptionGroup'],
  VsTable: ['VsTd', 'VsTh', 'VsTr']
}

const defaultInjectionID: IdInjectionContext = {
  prefix: 1024,
  current: 0
}

const defaultInclude: RegExp[] = [
  /\.vue$/,
  /\.vue\?vue/,
  /\.vue\?v=/,
  /\.((c|m)?j|t)sx?$/
]

const defaultExclude: RegExp[] = [
  /[\\/]node_modules[\\/]/,
  /[\\/]\.git[\\/]/,
  /[\\/]\.nuxt[\\/]/
]

export const defaults: Options = {
  components: allComponents,
  subComponents: allSubComponents,
  directives: allDirectives,
  imports: allImports,
  importStyle: 'css',
  themes: [],
  noStylesComponents: allNoStylesComponents,
  injectionID: defaultInjectionID,
  include: defaultInclude,
  exclude: defaultExclude,
  namespace: 'vs',
  appendTo: [],
  icon: 'VsIcon'
}
