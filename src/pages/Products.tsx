import { useSearchParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Reveal from "../components/Reveal"
import {
  CATEGORIES,
  PRODUCTS,
} from "../data/products"
import { useSeo } from "../hooks/useSeo"
import { search, brandsOf } from "../lib/helpers"

export default function Products() {
  const [sp, setSp] = useSearchParams()

  const q = sp.get("q") ?? ""
  const cat = sp.get("cat") ?? ""
  const brand = sp.get("brand") ?? ""
  const sort = sp.get("sort") ?? "featured"
  const max = Number(sp.get("max") ?? 0)

  useSeo({
    title: cat || "All solar products",
    description: `Browse ${cat ||
      "solar panels, batteries, solar lights, inverters and complete solar systems"
      } available in Uganda.`,
    path: "/products",
  })

  const upd = (key: string, value: string) => {
    const next = new URLSearchParams(sp)

    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }

    setSp(next, {
      replace: true,
    })
  }

  let list = search(q).filter((p) => {
    const matchesCategory =
      !cat || p.category === cat

    const matchesBrand =
      !brand || p.brand === brand

    const matchesPrice =
      !max ||
      p.price === null ||
      p.price <= max

    return (
      matchesCategory &&
      matchesBrand &&
      matchesPrice
    )
  })

  list = [...list].sort((a, b) => {
    switch (sort) {
      case "low":
        if (a.price === null) return 1
        if (b.price === null) return -1

        return a.price - b.price

      case "high":
        if (a.price === null) return 1
        if (b.price === null) return -1

        return b.price - a.price

      case "name":
        return a.name.localeCompare(b.name)

      case "newest":
        return Number(!!b.featured) - Number(!!a.featured)

      case "featured":
      default:
        return (
          Number(!!b.featured) -
          Number(!!a.featured)
        )
    }
  })

  return (
    <div className="wrap pad">
      <div className="products-heading">
        <div>
          <p className="eyebrow">DC Power</p>

          <h1>
            {q
              ? `Results for "${q}"`
              : cat || "All products"}
          </h1>

          {brand && (
            <p className="muted">
              Showing products from{" "}
              <strong>{brand}</strong>
            </p>
          )}
        </div>
      </div>

      <div className="shop">
        <form
          className="filters"
          aria-label="Product filters"
          onSubmit={(e) => e.preventDefault()}
        >
          <label>
            Search
            <input
              type="search"
              value={q}
              placeholder="Search products..."
              onChange={(e) =>
                upd("q", e.target.value)
              }
            />
          </label>

          <label>
            Category
            <select
              value={cat}
              onChange={(e) =>
                upd("cat", e.target.value)
              }
            >
              <option value="">
                All categories
              </option>

              {CATEGORIES.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label>
            Brand
            <select
              value={brand}
              onChange={(e) =>
                upd("brand", e.target.value)
              }
            >
              <option value="">
                All brands
              </option>

              {brandsOf().map((brandName) => (
                <option
                  key={brandName}
                  value={brandName}
                >
                  {brandName}
                </option>
              ))}
            </select>
          </label>

          <label>
            Max price
            <select
              value={max || ""}
              onChange={(e) =>
                upd("max", e.target.value)
              }
            >
              <option value="">
                Any price
              </option>

              {[500000, 1000000, 5000000, 15000000].map(
                (amount) => (
                  <option
                    key={amount}
                    value={amount}
                  >
                    Up to UGX{" "}
                    {amount.toLocaleString("en-UG")}
                  </option>
                )
              )}
            </select>
          </label>

          <label>
            Sort by
            <select
              value={sort}
              onChange={(e) =>
                upd("sort", e.target.value)
              }
            >
              <option value="featured">
                Featured
              </option>

              <option value="low">
                Price, low to high
              </option>

              <option value="high">
                Price, high to low
              </option>

              <option value="name">
                Name, A–Z
              </option>
            </select>
          </label>

          <button
            type="button"
            className="btn btn-ghost-dark"
            onClick={() => setSp({})}
          >
            Clear filters
          </button>
        </form>

        <div>
          <p
            className="muted"
            role="status"
            aria-live="polite"
          >
            {list.length} of {PRODUCTS.length} products
          </p>

          {list.length > 0 ? (
            <div className="grid">
              {list.map((product, index) => (
                <Reveal
                  key={product.id}
                  delay={(index % 3) * 70}
                >
                  <ProductCard p={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No products found</h2>

              <p>
                No products match your current filters.
                Try removing a filter, changing your
                search, or ask us on WhatsApp if we can
                source what you need.
              </p>

              <button
                type="button"
                className="btn btn-ghost-dark"
                onClick={() => setSp({})}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
