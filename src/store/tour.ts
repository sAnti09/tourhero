import type { TourType } from '@/_types/data'

const itineraries = [
  {
    id: 1,
    title: 'See the largest indoor water fall in the world',
    description: 'Just how much mind-boggling can be packed into a 14-day holiday? Well we\'ll tell you. Our hot adventure pack serious punch on a journey city Singapore and Malaysia.',
    photoUrls: [
      'https://4kwallpapers.com/images/wallpapers/marina-bay-sands-hotel-singapore-blue-hour-night-lights-3440x1440-2844.jpg',
      'https://www.marinabaysands.com/content/dam/marinabaysands/guides/around-mbs/landing/masthead-d.jpg',
      'https://i.natgeofe.com/n/0f84c896-bb7e-432a-825b-655d4621ffaa/supertrees-singapore_3x2.jpg?w=1436&h=958'
    ]
  },
  {
    id: 2,
    title: 'Two giant conservatories',
    description: 'Two giant conservatories rise beside Marina Bay like futuristic shells, one home to ancient olive trees, the other to a towering, tropical mountain. To the north are the Supertrees: futuristic',
    photoUrls: [
      'https://4kwallpapers.com/images/wallpapers/marina-bay-sands-hotel-singapore-blue-hour-night-lights-3440x1440-2844.jpg',
      'https://www.marinabaysands.com/content/dam/marinabaysands/guides/around-mbs/landing/masthead-d.jpg',
      'https://i.natgeofe.com/n/0f84c896-bb7e-432a-825b-655d4621ffaa/supertrees-singapore_3x2.jpg?w=1436&h=958'
    ]
  },
  {
    id: 3,
    title: 'Singapore\'s 21st-century botanical garden',
    description: 'Singapore\'s 21st-century botanical garden is a $1 billion, 101-hectare',
    photoUrls: [
      'https://4kwallpapers.com/images/wallpapers/marina-bay-sands-hotel-singapore-blue-hour-night-lights-3440x1440-2844.jpg',
      'https://www.marinabaysands.com/content/dam/marinabaysands/guides/around-mbs/landing/masthead-d.jpg',
      'https://i.natgeofe.com/n/0f84c896-bb7e-432a-825b-655d4621ffaa/supertrees-singapore_3x2.jpg?w=1436&h=958'
    ]
  }
]
export const tour: TourType = {
  id: '09781021',
  name: 'Marina Bay Sands Observation',
  description: 'A great spot for R&R: order yourself a drink from the bar and get comfortable on one of the day beds that line the impressive 100-metre pool.',
  region: 'Asia',
  country: 'Singapore',
  category: 'Strenuous Travel Style',
  videoUrl: 'https://www.youtube.com/watch?v=KYo6lUn25gs&ab_channel=DroneSnap',
  photoUrls: [
    'https://4kwallpapers.com/images/wallpapers/marina-bay-sands-hotel-singapore-blue-hour-night-lights-3440x1440-2844.jpg',
    'https://www.marinabaysands.com/content/dam/marinabaysands/guides/around-mbs/landing/masthead-d.jpg',
    'https://i.natgeofe.com/n/0f84c896-bb7e-432a-825b-655d4621ffaa/supertrees-singapore_3x2.jpg?w=1436&h=958'
  ],
  itinerary: itineraries.map((itinerary, index) => ({ day: index + 1, ...itinerary }))
}
