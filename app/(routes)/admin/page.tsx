"use client";

import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import {useAdminAuth} from "@/hooks/useAdminAuth";

// Registrar componentes de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function Page() {
    useAdminAuth();
    
    // Datos para la gráfica de barras
    const barData = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [
            {
                label: 'Ventas por Semana',
                data: [50, 75, 30, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Ventas por Semana',
            },
        },
    };

    // Datos para la gráfica de pastel
    const pieData = {
        labels: ['Caballero', 'Hidratación', 'Rizos', 'Antifrizz'],
        datasets: [
            {
                label: 'Porcentaje de Productos',
                data: [30, 25, 20, 25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Porcentaje de Productos por Categoría',
            },
        },
    };

    // Datos para la gráfica de línea
    const lineData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Caballero',
                data: [45, 30, 50, 70, 40, 60],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.3,
            },
            {
                label: 'Hidratación',
                data: [35, 60, 45, 50, 65, 55],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension: 0.3,
            },
            {
                label: 'Rizos',
                data: [25, 40, 60, 80, 35, 70],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                tension: 0.3,
            },
            {
                label: 'Antifrizz',
                data: [50, 35, 55, 45, 75, 65],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.3,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Ventas Mensuales por Categoría',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100, // Límite superior para el eje Y
            },
        },
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-center text-3xl font-extrabold mb-6">Gráficas 📈📊</h1>

            {/* Gráficas de barras y pastel */}
            <div className="flex justify-between w-full max-w-6xl">
                {/* Gráfica de barras */}
                <div className="w-full max-w-lg mb-8">
                    <Bar data={barData} options={barOptions} />
                </div>

                {/* Gráfica de pastel */}
                <div className="w-full max-w-lg">
                    <Pie data={pieData} options={pieOptions} />
                </div>
            </div>

            {/* Gráfica de línea */}
            <div className="w-full max-w-4xl mt-10">
                <Line data={lineData} options={lineOptions} />
            </div>
        </div>
    );
}
