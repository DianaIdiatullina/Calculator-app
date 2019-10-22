let assert = require('assert')
let CatalogMenu = require('../../modules/CatalogMenu.ts')

describe('CatalogMenu', () => {

  describe('#getMenu()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1,2,3].indexOf(4), -1)
    })
  })

})