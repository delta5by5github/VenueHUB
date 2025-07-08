'use client'; // This directive is necessary for client-side interactivity in Next.js App Router

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import the Link component for navigation
// import Image from 'next/image'; // Uncomment this line if you want to use Next.js Image component for optimized images

// Define interfaces for data structures
interface Venue {
  id: number;
  name: string;
  capacity: number;
  location: string;
  imageUrl: string;
}

// Main Home component for the VenueHUB homepage
export default function Home() {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState<string>('');
  // State to control whether all venues are displayed or a compressed view with animation
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  // State to control the current month/year displayed in the calendar
  const [currentDate, setCurrentDate] = useState(new Date());

  // Dummy data for available venues
  const availableVenues: Venue[] = [
    {
      id: 1,
      name: 'Conference Room A',
      capacity: 50,
      location: 'Building 10',
      imageUrl: 'https://placehold.co/400x250/E0E7FF/3B82F6?text=Conference+Room+A',
    },
    {
      id: 2,
      name: 'Multi Purpose Hall',
      capacity: 200,
      location: 'Uptown',
      imageUrl: 'https://placehold.co/400x250/D1FAE5/059669?text=Multi+Purpose+Hall',
    },
    {
      id: 3,
      name: 'Garden Venue C',
      capacity: 100,
      location: 'Suburbs',
      imageUrl: 'https://placehold.co/400x250/FFFBEB/D97706?text=Garden+Venue+C',
    },
    // --- Start of 50 new venues ---
    { id: 4, name: 'Grand Ballroom D', capacity: 300, location: 'City Center', imageUrl: 'https://placehold.co/400x250/FFEDD5/F97316?text=Ballroom+D' },
    { id: 5, name: 'Small Meeting Room E', capacity: 15, location: 'Downtown West', imageUrl: 'https://placehold.co/400x250/DBEAFE/3B82F6?text=Meeting+E' },
    { id: 6, name: 'Art Gallery F', capacity: 75, location: 'Arts District', imageUrl: 'https://placehold.co/400x250/E0F2F1/0D9488?text=Gallery+F' },
    { id: 7, name: 'Rooftop Terrace G', capacity: 120, location: 'Midtown', imageUrl: 'https://placehold.co/400x250/F3E8FF/A855F7?text=Terrace+G' },
    { id: 8, name: 'Lecture Hall H', capacity: 180, location: 'University Area', imageUrl: 'https://placehold.co/400x250/FCE7F3/EC4899?text=Lecture+H' },
    { id: 9, name: 'Workshop Space I', capacity: 40, location: 'Industrial Park', imageUrl: 'https://placehold.co/400x250/FEF2F2/EF4444?text=Workshop+I' },
    { id: 10, name: 'Private Dining Room J', capacity: 25, location: 'Fine Dining District', imageUrl: 'https://placehold.co/400x250/ECFDF5/10B981?text=Dining+J' },
    { id: 11, name: 'Outdoor Amphitheater K', capacity: 500, location: 'Parkside', imageUrl: 'https://placehold.co/400x250/EFF6FF/2563EB?text=Amphitheater+K' },
    { id: 12, name: 'Studio L', capacity: 30, location: 'Creative Hub', imageUrl: 'https://placehold.co/400x250/F0F9FF/0EA5E9?text=Studio+L' },
    { id: 13, name: 'Co-working Space M', capacity: 60, location: 'Tech Zone', imageUrl: 'https://placehold.co/400x250/FAF5FF/7C3AED?text=Co-working+M' },
    { id: 14, name: 'Convention Center N', capacity: 1000, location: 'Exhibition Grounds', imageUrl: 'https://placehold.co/400x250/FEFCE8/EAB308?text=Convention+N' },
    { id: 15, name: 'Pop-up Shop O', capacity: 20, location: 'Shopping Street', imageUrl: 'https://placehold.co/400x250/F5F5F4/78716C?text=Pop-up+O' },
    { id: 16, name: 'Greenhouse P', capacity: 35, location: 'Botanical Gardens', imageUrl: 'https://placehold.co/400x250/F0FDF4/22C55E?text=Greenhouse+P' },
    { id: 17, name: 'Historic Hall Q', capacity: 150, location: 'Old Town', imageUrl: 'https://placehold.co/400x250/FDF2F8/DB2777?text=Historic+Q' },
    { id: 18, name: 'Innovation Lab R', capacity: 45, location: 'Research Park', imageUrl: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=Lab+R' },
    { id: 19, name: 'Sports Arena S', capacity: 5000, location: 'Sports Complex', imageUrl: 'https://placehold.co/400x250/EBF8FF/3B82F6?text=Arena+S' },
    { id: 20, name: 'Community Center T', capacity: 90, location: 'Residential Area', imageUrl: 'https://placehold.co/400x250/F0FDF4/16A34A?text=Community+T' },
    { id: 21, name: 'Recording Studio U', capacity: 10, location: 'Music Row', imageUrl: 'https://placehold.co/400x250/F8FAFC/64748B?text=Studio+U' },
    { id: 22, name: 'Yoga Studio V', capacity: 20, location: 'Wellness District', imageUrl: 'https://placehold.co/400x250/F0F9FF/0EA5E9?text=Yoga+V' },
    { id: 23, name: 'Film Set W', capacity: 80, location: 'Backlot', imageUrl: 'https://placehold.co/400x250/FFF7ED/F97316?text=Film+W' },
    { id: 24, name: 'Library Annex X', capacity: 55, location: 'University Campus', imageUrl: 'https://placehold.co/400x250/F5F3FF/8B5CF6?text=Library+X' },
    { id: 25, name: 'Gastronomy Kitchen Y', capacity: 18, location: 'Culinary Institute', imageUrl: 'https://placehold.co/400x250/FDF2F8/EC4899?text=Kitchen+Y' },
    { id: 26, name: 'Observatory Z', capacity: 20, location: 'Hilltop', imageUrl: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=Observatory+Z' },
    { id: 27, name: 'Sky Lounge A2', capacity: 130, location: 'Financial District', imageUrl: 'https://placehold.co/400x250/EFF6FF/2563EB?text=Sky+Lounge+A2' },
    { id: 28, name: 'Training Room B2', capacity: 30, location: 'Corporate Park', imageUrl: 'https://placehold.co/400x250/F0FDF4/16A34A?text=Training+B2' },
    { id: 29, name: 'Exhibition Space C2', capacity: 250, location: 'Fairgrounds', imageUrl: 'https://placehold.co/400x250/FEFCE8/EAB308?text=Exhibition+C2' },
    { id: 30, name: 'Music Venue D2', capacity: 400, location: 'Entertainment Quarter', imageUrl: 'https://placehold.co/400x250/FCE7F3/EC4899?text=Music+D2' },
    { id: 31, name: 'Pop-Art Gallery E2', capacity: 65, location: 'SoHo', imageUrl: 'https://placehold.co/400x250/DBEAFE/3B82F6?text=Pop-Art+E2' },
    { id: 32, name: 'Digital Hub F2', capacity: 95, location: 'Cyber City', imageUrl: 'https://placehold.co/400x250/E0F2F1/0D9488?text=Digital+F2' },
    { id: 33, name: 'Riverside Deck G2', capacity: 110, location: 'Waterfront', imageUrl: 'https://placehold.co/400x250/F3E8FF/A855F7?text=Riverside+G2' },
    { id: 34, name: 'Ballroom H2', capacity: 280, location: 'Grand Hotel', imageUrl: 'https://placehold.co/400x250/FFEDD5/F97316?text=Ballroom+H2' },
    { id: 35, name: 'Small Auditorium I2', capacity: 70, location: 'Cultural Center', imageUrl: 'https://placehold.co/400x250/FEF2F2/EF4444?text=Auditorium+I2' },
    { id: 36, name: 'Rooftop Garden J2', capacity: 85, location: 'High Rise', imageUrl: 'https://placehold.co/400x250/ECFDF5/10B981?text=Garden+J2' },
    { id: 37, name: 'Innovation Hub K2', capacity: 120, location: 'Startup District', imageUrl: 'https://placehold.co/400x250/EFF6FF/2563EB?text=Innovation+K2' },
    { id: 38, name: 'Photography Studio L2', capacity: 20, location: 'Artisan Quarter', imageUrl: 'https://placehold.co/400x250/F0F9FF/0EA5E9?text=Photo+L2' },
    { id: 39, name: 'Conference Room M2', capacity: 60, location: 'Business Tower', imageUrl: 'https://placehold.co/400x250/FAF5FF/7C3AED?text=Conference+M2' },
    { id: 40, name: 'Large Banquet Hall N2', capacity: 350, location: 'Event Complex', imageUrl: 'https://placehold.co/400x250/FEFCE8/EAB308?text=Banquet+N2' },
    { id: 41, name: 'Outdoor Patio O2', capacity: 40, location: 'Restaurant Row', imageUrl: 'https://placehold.co/400x250/F5F5F4/78716C?text=Patio+O2' },
    { id: 42, name: 'Lecture Theatre P2', capacity: 190, location: 'Academic Campus', imageUrl: 'https://placehold.co/400x250/F0FDF4/22C55E?text=Theatre+P2' },
    { id: 43, name: 'Wedding Chapel Q2', capacity: 70, location: 'Historic District', imageUrl: 'https://placehold.co/400x250/FDF2F8/DB2777?text=Chapel+Q2' },
    { id: 44, name: 'Incubator Space R2', capacity: 30, location: 'Tech Park', imageUrl: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=Incubator+R2' },
    { id: 45, name: 'Concert Hall S2', capacity: 1500, location: 'Cultural Hub', imageUrl: 'https://placehold.co/400x250/EBF8FF/3B82F6?text=Concert+S2' },
    { id: 46, name: 'Multi-purpose Room T2', capacity: 80, location: 'Community Center', imageUrl: 'https://placehold.co/400x250/F0FDF4/16A34A?text=Multi-purpose+T2' },
    { id: 47, name: 'Sound Stage U2', capacity: 50, location: 'Film Studios', imageUrl: 'https://placehold.co/400x250/F8FAFC/64748B?text=Sound+U2' },
    { id: 48, name: 'Dance Studio V2', capacity: 25, location: 'Arts Complex', imageUrl: 'https://placehold.co/400x250/F0F9FF/0EA5E9?text=Dance+V2' },
    { id: 49, name: 'Event Tent W2', capacity: 220, location: 'Festival Grounds', imageUrl: 'https://placehold.co/400x250/FFF7ED/F97316?text=Tent+W2' },
    { id: 50, name: 'Executive Boardroom X2', capacity: 12, location: 'High-rise Office', imageUrl: 'https://placehold.co/400x250/F5F3FF/8B5CF6?text=Boardroom+X2' },
    { id: 51, name: 'Cooking Class Space Y2', capacity: 15, location: 'Marketplace', imageUrl: 'https://placehold.co/400x250/FDF2F8/EC4899?text=Cooking+Y2' },
    { id: 52, name: 'Rooftop Bar Z2', capacity: 90, location: 'Nightlife District', imageUrl: 'https://placehold.co/400x250/E0F7FA/00BCD4?text=Rooftop+Z2' },
    { id: 53, name: 'Innovation Center A3', capacity: 170, location: 'Tech Campus', imageUrl: 'https://placehold.co/400x250/EFF6FF/2563EB?text=Innovation+A3' },
    // --- End of 50 new venues ---
  ];

  // Dummy data for daily booking statuses for the calendar
  const dailyBookingStatuses: { date: string; status: 'fully-booked' | 'partially-booked' | 'locked' }[] = [
    // Dates for July 2025 (current month as of writing this)
    { date: '2025-07-10', status: 'partially-booked' },
    { date: '2025-07-15', status: 'fully-booked' },
    { date: '2025-07-20', status: 'locked' },
    { date: '2025-07-25', status: 'fully-booked' },
    { date: '2025-07-28', status: 'partially-booked' },
    { date: '2025-07-03', status: 'locked' },

    // Dates for August 2025
    { date: '2025-08-05', status: 'fully-booked' },
    { date: '2025-08-12', status: 'locked' },
    { date: '2025-08-18', status: 'partially-booked' },
    { date: '2025-08-22', status: 'fully-booked' },

    // Dates for September 2025
    { date: '2025-09-01', status: 'locked' },
    { date: '2025-09-10', status: 'fully-booked' },
    { date: '2025-09-15', status: 'partially-booked' },
  ];

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  // Filter venues based on search term (by name or capacity)
  const filteredVenues = availableVenues.filter((venue) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const searchNumber = parseInt(searchTerm); // Attempt to parse search term as a number

    // Check if the search term is a valid number and if venue capacity meets the criteria
    if (!isNaN(searchNumber)) {
      // If the search term is a number, check if venue capacity is equal to or greater than the search number
      return venue.capacity >= searchNumber;
    }

    // If the search term is not a number, or if it's a mix of text and numbers,
    // revert to searching by name (case-insensitive)
    return venue.name.toLowerCase().includes(lowerCaseSearchTerm);
  });

  // Duplicate filtered venues for seamless carousel looping
  const venuesForCarousel = filteredVenues.length > 0
    ? [...filteredVenues, ...filteredVenues, ...filteredVenues] // Duplicate 3 times for smooth loop
    : [];

  // Calculate animation duration based on number of items to maintain consistent speed
  // Increased multiplier from 4 to 8 for slower animation
  const animationDuration = filteredVenues.length > 0 ? `${filteredVenues.length * 8}s` : '0s';

  // Handle search submission (for demonstration, just logs the term)
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    // The filtering happens automatically as searchTerm changes due to React's re-rendering
  };

  // --- Calendar Logic ---
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0); // Day 0 of next month is last day of current month

    const days: (number | null)[] = [];

    // Add nulls for leading empty days from previous month
    const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the current month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push(i);
    }

    // Add nulls for trailing empty days to fill the last week
    const totalCells = days.length;
    const remainingCells = 42 - totalCells; // Max 6 rows * 7 days = 42 cells for full calendar
    for (let i = 0; i < remainingCells; i++) {
        days.push(null);
    }

    return days;
  };

  const getDayStatusClass = (year: number, month: number, day: number | null): string => {
    if (day === null) return ''; // No status for empty cells

    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const foundStatus = dailyBookingStatuses.find(d => d.date === dateString);

    if (foundStatus) {
      switch (foundStatus.status) {
        case 'fully-booked':
          return 'bg-green-200 text-green-800 font-semibold'; // Light green for fully booked
        case 'partially-booked':
          return 'bg-yellow-200 text-yellow-800 font-semibold'; // Light yellow for partially booked
        case 'locked':
          return 'bg-red-200 text-red-800 font-semibold'; // Light red for locked
        default:
          return '';
      }
    }

    // Highlight current day if it's today
    const today = new Date();
    if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
      return 'bg-indigo-100 text-indigo-700 border border-indigo-500'; // Highlight today
    }

    return ''; // Default for available days
  };

  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      return newDate;
    });
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-indexed
  const daysInCalendar = getDaysInMonth(currentDate);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header Section (Navbar) */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-3xl font-extrabold text-indigo-700">
            <img
              src="https://placehold.co/40x40/6366F1/FFFFFF?text=VH" // Replace with the path to your actual logo in the public directory
              alt="VenueHub Logo"
              width={40}
              height={40}
              className="rounded-full"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://placehold.co/40x40/6366F1/FFFFFF?text=VH`; // Fallback placeholder
              }}
            />
            <span>Venue<span className="text-indigo-500">Hub</span></span>
          </div>
          {/* Login Button */}
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-300 shadow-sm">
            Login
          </button>
        </nav>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        {/* Available Venues Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-indigo-800">
            Available Venues
          </h1>
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="mb-8 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search by capacity or location"
              className="w-full p-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

          {/* Venue Cards Container with Animation and Expand/Collapse */}
          <div className="relative group overflow-hidden rounded-xl shadow-md bg-white p-4">
            {/* Conditional Rendering: Carousel or Grid */}
            {!isExpanded ? (
              // Carousel View (Compressed)
              <div className="flex flex-nowrap overflow-hidden py-4">
                <div
                  className="flex animate-carousel-flow"
                  style={{ animationDuration: animationDuration }}
                >
                  {filteredVenues.length > 0 ? (
                    venuesForCarousel.map((venue: Venue, index: number) => (
                      <div
                        key={`${venue.id}-${index}`} // Use a combined key for duplicated items
                        className="flex-none w-72 md:w-80 lg:w-96 mr-6 rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200 hover:shadow-md"
                      >
                        <img
                          src={venue.imageUrl}
                          alt={venue.name}
                          className="w-full h-48 object-cover rounded-t-xl"
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `https://placehold.co/400x250/CCCCCC/333333?text=Venue+Image`;
                          }}
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                            {venue.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-1">
                            <i className="fas fa-users mr-2 text-indigo-500"></i>
                            Capacity: {venue.capacity} people
                          </p>
                          <p className="text-gray-600 text-sm mb-3">
                            <i className="fas fa-map-marker-alt mr-2 text-indigo-500"></i>
                            Location: {venue.location}
                          </p>
                          <Link href={`/venues/${venue.id}`} passHref>
                            <button className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-sm">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-full text-center py-10 text-gray-600 text-lg">
                      No venues found matching your search criteria.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Grid View (Expanded)
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredVenues.length > 0 ? (
                  filteredVenues.map((venue: Venue) => (
                    <div
                      key={venue.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg border border-gray-200"
                    >
                      <img
                        src={venue.imageUrl}
                        alt={venue.name}
                        className="w-full h-48 object-cover rounded-t-xl"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://placehold.co/400x250/CCCCCC/333333?text=Venue+Image`;
                        }}
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                          {venue.name}
                        </h3>
                        <p className="text-gray-600 mb-1">
                          <i className="fas fa-users mr-2 text-indigo-500"></i>
                          Capacity: {venue.capacity} people
                        </p>
                        <p className="text-gray-600 mb-3">
                          <i className="fas fa-map-marker-alt mr-2 text-indigo-500"></i>
                          Location: {venue.location}
                        </p>
                        <Link href={`/venues/${venue.id}`} passHref>
                          <button className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-sm">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-600 text-xl py-10">
                    No venues found matching your search criteria.
                  </div>
                )}
              </div>
            )}

            {/* "View All" Arrow - Appears on hover, only when not expanded and there are venues */}
            {!isExpanded && filteredVenues.length > 0 && (
              <button
                onClick={() => setIsExpanded(true)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 transform translate-x-1/2 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 group-hover:text-black"
                aria-label="View all venues"
              >
                {/* Changed icon from <i> tag with class to direct '>' character */}
                <span className="text-2xl font-bold">&gt;</span>
              </button>
            )}
          </div>

          {/* "Show Fewer" Button - Appears only when expanded and there are venues */}
          {isExpanded && filteredVenues.length > 0 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setIsExpanded(false)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-sm">
                Show Fewer Venues
              </button>
            </div>
          )}
        </section>

        ---

        {/* Upcoming Bookings Calendar Section */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-indigo-800 text-center">
            Booking Calendar
          </h2>
          <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={goToPreviousMonth}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                aria-label="Previous Month"
              >
                <i className="fas fa-chevron-left text-gray-700"></i>
              </button>
              <h3 className="text-2xl font-semibold text-indigo-700">
                {months[currentMonth]} {currentYear}
              </h3>
              <button
                onClick={goToNextMonth}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                aria-label="Next Month"
              >
                <i className="fas fa-chevron-right text-gray-700"></i>
              </button>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-700 mb-2">
              {daysOfWeek.map(day => (
                <div key={day} className="py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-2">
              {daysInCalendar.map((day, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center h-12 w-12 rounded-lg text-lg
                    ${day !== null ? 'cursor-pointer hover:bg-indigo-50 transition duration-200' : 'text-gray-400 cursor-not-allowed'}
                    ${getDayStatusClass(currentYear, currentMonth, day)}
                  `}
                  aria-label={day ? `Day ${day} ${months[currentMonth]} ${currentYear}` : 'Empty day slot'}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Legend for statuses */}
            <div className="mt-8 pt-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Booking Status Legend:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-green-200 mr-2 border border-green-300"></span>
                        <span className="text-gray-700">Fully Booked</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-yellow-200 mr-2 border border-yellow-300"></span>
                        <span className="text-gray-700">Partially Booked</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-red-200 mr-2 border border-red-300"></span>
                        <span className="text-gray-700">Locked by Admin</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-indigo-100 mr-2 border border-indigo-500"></span>
                        <span className="text-gray-700">Today</span>
                    </div>
                     <div className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-gray-50 mr-2 border border-gray-300"></span>
                        <span className="text-gray-700">Available</span>
                    </div>
                </div>
            </div>

          </div>
        </section>
      </main>

      ---

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 mt-16 rounded-t-lg">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">
            &copy; {new Date().getFullYear()} VenueHUB. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy-policy" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/tos" passHref>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Terms of Service</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Custom Tailwind CSS for animations */}
      <style jsx>{`
        /* Keyframes for continuous carousel flow */
        @keyframes carousel-flow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%); /* Moves one full set of duplicated venues */
          }
        }

        .animate-carousel-flow {
          animation: carousel-flow linear infinite;
        }
      `}</style>
      {/* Font Awesome for icons (if not using a dedicated icon library in Next.js) */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
    </div>
  );
}
