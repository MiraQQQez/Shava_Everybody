describe('Тестирование сайта', () => {
  describe('Главная страница', () => {
    beforeEach(() => {
      cy.visit('index.html')
    })

    it('Проверка навигации', () => {
      cy.get('nav').should('be.visible')
      cy.get('nav li').should('have.length', 4)
    })

    it('Проверка секции меню', () => {
      cy.get('.menu-container').should('be.visible')
      cy.get('.shava_products').should('have.length', 3)
    })

    it('Проверка футера', () => {
      cy.get('.main-footer').should('be.visible')
      cy.get('.footer-social').should('exist')
    })

    it('Проверка приветственного блока', () => {
      cy.get('.welcome-container').should('be.visible')
      cy.get('.welcome-container h1').should('contain', 'Добро пожаловать')
    })
  })

  describe('Страницы меню', () => {
    it('Проверка страницы шаурмы с курицей', () => {
      cy.visit('vendor/css/pages/products/chicken/shava_chicken.html')
      cy.get('.menu-container').should('be.visible')
      cy.get('.shava_products').should('have.length.at.least', 1)
      cy.get('.product-info').should('exist')
      cy.get('.product-price').should('exist')
    })

    it('Проверка страницы шаурмы с говядиной', () => {
      cy.visit('vendor/css/pages/products/beef/shava_beef.html')
      cy.get('.menu-container').should('be.visible')
      cy.get('.shava_products').should('have.length.at.least', 1)
      cy.get('.product-info').should('exist')
      cy.get('.product-price').should('exist')
    })

    it('Проверка страницы веганской шаурмы', () => {
      cy.visit('vendor/css/pages/products/vegan/shava_vegan.html')
      cy.get('.menu-container').should('be.visible')
      cy.get('.shava_products').should('have.length.at.least', 1)
      cy.get('.product-info').should('exist')
      cy.get('.product-price').should('exist')
    })
  })
}) 