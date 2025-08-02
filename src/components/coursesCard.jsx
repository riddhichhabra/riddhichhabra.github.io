export default function CourseCard({title, description}){
    return (
        <div className="border-b border-gray-700 pb-2">
            <h3 className="text-md text-white">{title}</h3>
            <p className="text-sm whitespace-pre-wrap break-words text-gray-300">{description}</p>
        </div>
    );
}