import Base from './Base'
import { Component } from 'vue-property-decorator'

@Component
export default class BasePage extends Base {

  public title: string = ''

  constructor () {
    super()
  }

  setTitle (title: string): void {
    document.title = title
  }

  head () {
    return {
      title: this.title
    }
  }
}
