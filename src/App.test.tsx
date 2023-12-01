import { render } from "@testing-library/react"
import App from "./App"

describe('test', () => {
  it('should work', () => {
    expect(1).toBe(1)
  })

  it('should render', () => {
    render(<App />)
  })
})


