const imageGallery = [
  {
    id: 1,
    location: "Sài Gòn",
    title: "Sunset at the beach",
    description: "A beautiful sunset at the beach in Saigon",
    src: "https://source.unsplash.com/VWcPlbHglYc",
    tag: "Saigon",
  },
  {
    id: 2,
    location: "Vũng Tàu",
    title: "Coastal landscape",
    description: "A stunning view of the coast in Vung Tau",
    src: "https://source.unsplash.com/FV3GConVSss",
    tag: "VungTau",
  },
  {
    id: 3,
    location: "Sài Gòn",
    title: "City skyline",
    description: "A beautiful view of Saigon at night",
    src: "https://source.unsplash.com/e6FMMambeO4",
    tag: "Saigon",
  },
  {
    id: 4,
    location: "Tây Ninh",
    title: "Countryside landscape",
    description: "A scenic view of the countryside in Tay Ninh",
    src: "https://source.unsplash.com/klCiPmzUw0Y",
    tag: "TayNinh",
  },
  {
    id: 5,
    location: "Tây Ninh",
    title: "Rice fields",
    description: "A beautiful view of rice fields in Tay Ninh",
    src: "https://source.unsplash.com/IdNOTjPeHrE",
    tag: "TayNinh",
  },
  {
    id: 6,
    location: "Tây Ninh",
    title: "Mountain landscape",
    description: "A beautiful view of the mountains in Tay Ninh",
    src: "https://source.unsplash.com/O0N9MF--hK4",
    tag: "TayNinh",
  },
  {
    id: 7,
    location: "Vũng Tàu",
    title: "Seaside view",
    description: "A stunning view of the seaside in Vung Tau",
    src: "https://source.unsplash.com/DqyYTM7pR2o",
    tag: "VungTau",
  },

  {
    id: 9,
    location: "Sydney",
    title: "Harbor Bridge",
    description: "Iconic view of the Sydney Harbor Bridge",
    src: "https://images.pexels.com/photos/2498393/pexels-photo-2498393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tag: "Sydney",
  },
  {
    id: 10,
    location: "New York",
    title: "Central Park",
    description: "A beautiful day in Central Park",
    src: "https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tag: "York",
  },
  {
    id: 11,
    location: "Janeiro",
    title: "Eiffel Tower",
    description: "A stunning view of the Eiffel Tower",
    src: "https://images.pexels.com/photos/260346/pexels-photo-260346.jpeg?auto=compress&cs=tinysrgb&dpr=2",
    tag: "Janeiro",
  },

  {
    id: 15,
    location: "Rio de Janeiro",
    title: "Christ the Redeemer",
    description: "View of Christ the Redeemer statue in Rio de Janeiro",
    src: "https://images.pexels.com/photos/1628094/pexels-photo-1628094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tag: "Janeiro",
  },
  {
    id: 16,
    location: "Bali",
    title: "Rice Fields",
    description: "Beautiful rice fields in Bali",
    src: "https://images.pexels.com/photos/3771003/pexels-photo-3771003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tag: "Bali",
  },
];

function convertText(text) {
  // loại bỏ khoảng trắng và chuyển đổi tất cả các chữ cái thành chữ thường
  return text.replace(/\s+/g, "").toLowerCase();
}
export default imageGallery;
