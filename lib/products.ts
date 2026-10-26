import catalog from "@/public/boed_static_public/products.json";
export const products = catalog.products.map(p => ({ ...p, image: `/boed_static_public${p.image}`, images: p.images.map(src => `/boed_static_public${src}`), sizes: p.sizes.length ? p.sizes : ["Unspecified"] }));
export type Product = (typeof products)[number];
export const getProduct = (slug: string) => products.find(p => p.slug === slug);
export const money = (amount: number) => new Intl.NumberFormat("en-BD", { style: "currency", currency: "BDT", maximumFractionDigits: 0 }).format(amount);
