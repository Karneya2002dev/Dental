export default function ServiceCard({ service }){
  return (
    <div className="p-6 rounded-xl border shadow-sm bg-white">
      <h4 className="font-semibold">{service.title}</h4>
      <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
    </div>
  );
}
