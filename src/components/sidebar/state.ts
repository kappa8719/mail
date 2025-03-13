import { atom } from 'jotai'

export type SidebarState = 'main' | 'settings'

export const sidebarState = atom<SidebarState>('main')