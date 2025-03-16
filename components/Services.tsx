import ServiceCards from "./ServiceCards";

const Services = () => {
    return (
        <section id="services" className="bg-muted py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
                    <p className="mt-4 text-muted-foreground">
                        From custom designs to cover-ups, we offer a wide range of tattooing
                        services
                    </p>
                </div>
                <ServiceCards />
            </div>
        </section>
    );
};

export default Services;
