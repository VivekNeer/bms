import { Input } from '@/components/ui/input'

export default function SearchBar() {
  return (
    <div className="w-full max-w-lg">
      <Input 
        type="text"
        placeholder="Search for movies, events, plays..."
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  )
}
