import api from './index';

export function getNews() {
  return api.fetch(
    '*[_type == "post"] | order(publishedAt desc) { _id, title, slug,subtitle, publishedAt,link, "imageUrl": mainImage.asset->url }'
  );
}



