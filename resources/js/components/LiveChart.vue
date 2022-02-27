<template>
    <div class="flex flex-col text-center">
        <div class="mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                <div class="rounded-lg">
                    <apexchart
                        width="600"
                        type="bar"
                        :options="chartOptions"
                        :series="series"
                    ></apexchart>
                </div>
            </div>
        </div>

        <h1 class="text-3xl font-bold mt-8">⏰📊✨ A live chart based on Laravel Time Series</h1>
    </div>
</template>
<script>

export default {
    data: function() {
        return {
            chartOptions: {
                chart: {
                    id: "live-chart",
                    toolbar: {
                        show: false,
                    }
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
            },
            series: [
                {
                    name: "Logs count",
                    data: [30, 40, 35, 50, 49, 60, 70, 91],
                },
            ],
        };
    },
}
</script>
