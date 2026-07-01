import { withBasePath } from "@/lib/basePath";

const floralAssets = {
  corner: "/assets/decor/floral-corner.png",
  divider: "/assets/decor/floral-divider.png",
  large: "/assets/decor/floral-large.png",
  peony: "/assets/decor/flower-01-peony.png",
  bouquet: "/assets/decor/flower-02-peony-bouquet.png",
  vertical: "/assets/decor/flower-03-watercolor-vertical.png",
  garland: "/assets/decor/flower-04-rose-garland.png",
  softBouquet: "/assets/decor/flower-05-soft-bouquet.png",
  roseCluster: "/assets/decor/flower-06-rose-cluster.png",
  sideBorder: "/assets/decor/flower-07-side-border.png",
} as const;

type FloralDecorProps = {
  variant: keyof typeof floralAssets;
  className?: string;
};

export function FloralDecor({ variant, className = "" }: FloralDecorProps) {
  return (
    <span
      aria-hidden="true"
      className={`floral-decor floral-decor-${variant} ${className}`}
      style={{ backgroundImage: `url(${withBasePath(floralAssets[variant])})` }}
    />
  );
}
