export interface ItineraryItemType {
  id: number,
  day: number,
  title: string,
  description: string;
}

export interface TourType {
  id: string,
  name: string,
  description: string,
  region: string,
  country: string,
  category: string,
  videoUrl?: string;
  photoUrls: string[],
  itinerary: ItineraryItemType[]
}