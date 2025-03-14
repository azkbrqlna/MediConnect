import { Pill, Speech, Stethoscope } from "lucide-react";

export const doctors = [
  {
    id: 1,
    name: "dr. Budi Santoso, Sp.PD",
    specialty: "Spesialis Penyakit Dalam",
    image: "/dr-budi.jpg",
    categories: ["specialist"],
    schedule: [
      { day: "Senin", time: "08:00 - 14:00" },
      { day: "Rabu", time: "13:00 - 19:00" },
      { day: "Jumat", time: "08:00 - 14:00" },
    ],
    appointmentFee: 20000,
  },
  {
    id: 2,
    name: "dr. Siti Rahmawati, Sp.A",
    specialty: "Spesialis Anak",
    image: "/dr-budi.jpg",
    categories: ["specialist"],
    schedule: [
      { day: "Selasa", time: "08:00 - 14:00" },
      { day: "Kamis", time: "13:00 - 19:00" },
      { day: "Sabtu", time: "09:00 - 15:00" },
    ],
    appointmentFee: 20000,
  },
  {
    id: 3,
    name: "dr. Raden Ahmad, Sp.OG",
    specialty: "Spesialis Kebidanan dan Kandungan",
    image: "/dr-budi.jpg",
    categories: ["specialist"],
    schedule: [
      { day: "Senin", time: "13:00 - 19:00" },
      { day: "Kamis", time: "08:00 - 14:00" },
      { day: "Sabtu", time: "09:00 - 15:00" },
    ],
    appointmentFee: 20000,
  },
  {
    id: 4,
    name: "dr. Diana Putri",
    specialty: "Dokter Umum",
    image: "/dr-budi.jpg",
    categories: ["general"],
    schedule: [
      { day: "Senin", time: "08:00 - 20:00" },
      { day: "Selasa", time: "08:00 - 20:00" },
      { day: "Rabu", time: "08:00 - 20:00" },
      { day: "Kamis", time: "08:00 - 20:00" },
      { day: "Jumat", time: "08:00 - 20:00" },
      { day: "Sabtu", time: "09:00 - 17:00" },
    ],
    appointmentFee: 20000,
  },
  {
    id: 5,
    name: "dr. Hendra Wijaya",
    specialty: "Dokter Umum",
    image: "/dr-budi.jpg",
    categories: ["general"],
    schedule: [
      { day: "Senin", time: "08:00 - 20:00" },
      { day: "Selasa", time: "08:00 - 20:00" },
      { day: "Rabu", time: "08:00 - 20:00" },
      { day: "Kamis", time: "08:00 - 20:00" },
      { day: "Jumat", time: "08:00 - 20:00" },
      { day: "Sabtu", time: "09:00 - 17:00" },
    ],
    appointmentFee: 20000,
  },
  {
    id: 6,
    name: "dr. Maya Suryani, Sp.JP",
    specialty: "Spesialis Jantung dan Pembuluh Darah",
    image: "/dr-budi.jpg",
    categories: ["specialist"],
    schedule: [
      { day: "Selasa", time: "13:00 - 19:00" },
      { day: "Jumat", time: "13:00 - 19:00" },
    ],
    appointmentFee: 20000,
  },
];

export const availableTimeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

export const appointments = [
  {
    id: 1,
    doctor: "dr. Budi Santoso, Sp.PD",
    specialty: "Spesialis Penyakit Dalam",
    date: "5 Maret 2025",
    time: "09:00 WIB",
    reason: "Konsultasi tekanan darah tinggi",
    status: "confirmed",
    invoice: "INV-20250305-001",
    patientName: "Ahmad Nuriman",
    phoneNumber: "+62 812-3456-7890",
    email: "2eKUc@example.com",
    appointmentFee: 20000,
    handlingFee: 150000,
    medicationFee: 100000,
  },
  {
    id: 2,
    doctor: "dr. Siti Rahmawati, Sp.A",
    specialty: "Spesialis Anak",
    date: "10 Maret 2025",
    time: "13:30 WIB",
    reason: "Imunisasi rutin",
    status: "waiting",
    invoice: "INV-20250310-002",
    patientName: "Siti Fatimah",
    phoneNumber: "+62 877-8901-2345",
    consultationFee: 200000,
    handlingFee: 100000,
    medicationFee: 75000,
  },
  {
    id: 3,
    doctor: "dr. Diana Putri",
    specialty: "Dokter Umum",
    date: "20 Februari 2025",
    time: "10:00 WIB",
    reason: "Pemeriksaan kesehatan tahunan",
    status: "completed",
    invoice: "INV-20250220-003",
    patientName: "Raden Surya Wiranto",
    phoneNumber: "+62 811-2345-6789",
    consultationFee: 300000,
    handlingFee: 50000,
    medicationFee: 50000,
  },
  {
    id: 4,
    doctor: "dr. Maya Suryani, Sp.JP",
    specialty: "Spesialis Jantung dan Pembuluh Darah",
    date: "15 Februari 2025",
    time: "14:00 WIB",
    reason: "Evaluasi EKG",
    status: "canceled",
    invoice: "INV-20250215-004",
    patientName: "Sri Martini",
    phoneNumber: "+62 857-6789-0123",
    consultationFee: 500000,
    handlingFee: 250000,
    medicationFee: 150000,
  },
  {
    id: 5,
    doctor: "dr. Raden Ahmad, Sp.OG",
    specialty: "Spesialis Kebidanan dan Kandungan",
    date: "15 Maret 2025",
    time: "11:00 WIB",
    reason: "Pemeriksaan kehamilan",
    status: "ongoing",
    invoice: "INV-20250315-005",
    patientName: "Dewi Kusuma",
    phoneNumber: "+62 878-9012-3456",
    consultationFee: 350000,
    handlingFee: 200000,
    medicationFee: 100000,
  },
  {
    id: 5,
    doctor: "dr. Raden Patah, Sp.OG",
    specialty: "Spesialis Telinga , Hidung dan Tenggorokan",
    date: "8 Maret 2025",
    time: "11:00 WIB",
    reason: "Pemeriksaan kehamilan",
    status: "waiting",
    invoice: "INV-20250315-006",
    patientName: "Dewi Kusuma",
    phoneNumber: "+62 878-9012-3459",
    consultationFee: 350000,
    handlingFee: 200000,
    medicationFee: 200000,
  },
];

export const serviceItems = [
  {
    icon: <Stethoscope className="h-12 w-12 text-blue-500" />,
    title: "Konsultasi Umum",
    description:
      "Layanan konsultasi kesehatan umum dengan dokter berpengalaman.",
  },
  {
    icon: <Stethoscope className="h-12 w-12 text-blue-500" />,
    title: "Konsultasi Spesialis",
    description:
      "Konsultasi dengan dokter spesialis dari berbagai bidang kedokteran.",
  },
  {
    icon: <Speech className="h-12 w-12 text-blue-500" />,
    title: "Janji Temu",
    description: "Janji temu online dengan dokter untuk pemeriksaan kesehatan.",
  },
  {
    icon: <Pill className="h-12 w-12 text-blue-500" />,
    title: "Resep Dokter",
    description:
      "Resep dokter yang disiapkan oleh dokter dengan kualitas terbaik.",
  },
];

export const examplePrescriptions = [
  {
    prescriptionNumber: "RX-2024-0305",
    doctorName: "Dr. Budi Santoso",
    specialty: "Dokter Umum",
    doctorImage: "/dr-budi.jpg",
    prescriptionDate: "05 Maret 2024",
    validUntil: "19 Maret 2024",
    medications: [
      {
        name: "Paracetamol",
        dosage: "500mg",
        frequency: "3x sehari",
        quantity: 2,
        price: 5000,
      },
      {
        name: "Amoxicillin",
        dosage: "250mg",
        frequency: "2x sehari",
        quantity: 1,
        price: 35000,
      },
    ],
  },
];

export const medications = [
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "3x sehari",
    quantity: 20,
    price: 5000,
  },
  {
    name: "Amoxicillin",
    dosage: "250mg",
    frequency: "2x sehari",
    quantity: 15,
    price: 35000,
  },
  {
    name: "Ibuprofen",
    dosage: "400mg",
    frequency: "2x sehari",
    quantity: 30,
    price: 8000,
  },
  {
    name: "Cetirizine",
    dosage: "10mg",
    frequency: "1x sehari",
    quantity: 25,
    price: 12000,
  },
  {
    name: "Omeprazole",
    dosage: "20mg",
    frequency: "1x sehari",
    quantity: 10,
    price: 15000,
  },
  {
    name: "Metformin",
    dosage: "500mg",
    frequency: "2x sehari",
    quantity: 40,
    price: 10000,
  },
  {
    name: "Loratadine",
    dosage: "10mg",
    frequency: "1x sehari",
    quantity: 20,
    price: 9000,
  },
  {
    name: "Aspirin",
    dosage: "100mg",
    frequency: "1x sehari",
    quantity: 50,
    price: 7000,
  },
  {
    name: "Vitamin C",
    dosage: "500mg",
    frequency: "1x sehari",
    quantity: 100,
    price: 5000,
  },
  {
    name: "Diazepam",
    dosage: "5mg",
    frequency: "2x sehari",
    quantity: 5,
    price: 20000,
  },
];
