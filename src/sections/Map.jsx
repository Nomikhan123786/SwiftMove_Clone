const Map = () => {
  return (
    <div data-aos="fade-up" className="h-100  overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
      <iframe
        title="SwiftMove location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148389.70267897085!2d-87.73187899999999!3d41.83371054999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e1!3m2!1sen!2s!4v1782806187518!5m2!1sen!2s"
        width="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[500px] w-full"
      />
    </div>
  );
};

export default Map;
