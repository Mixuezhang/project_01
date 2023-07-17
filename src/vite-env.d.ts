/// <reference types="vite/client" />

// declare module 'element-plus'

declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
