import * as React from "react";
import { cn } from "@/lib/utils";

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex justify-center bg-gray-900 text-white mt-10 mb-0 pb-0">
      <div
        data-slot="footer"
        className={cn("pt-12 pb-4 w-full max-w-7xl", className)}
        {...props}
      >
        <FooterContent>
          <FooterColumn>
            <h3 className="font-semibold text-lg">Customer Care</h3>
            <p>Call us: <span className="font-medium">2417</span></p>
            <p>Movies Now Showing in Mangaluru (Mangalore)</p>
          </FooterColumn>

          <FooterColumn>
            <h3 className="font-semibold text-lg">Movies by Genre</h3>
            <ul className="space-y-1">
              <li>Drama</li>
              <li>Action</li>
              <li>Thriller</li>
              <li>Romantic</li>
              <li>Comedy</li>
              <li>Crime</li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3 className="font-semibold text-lg">Movies by Language</h3>
            <ul className="space-y-1">
              <li>Hindi</li>
              <li>Telugu</li>
              <li>Kannada</li>
              <li>Malayalam</li>
              <li>Tamil</li>
              <li>English</li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3 className="font-semibold text-lg">Subscribe to the Newsletter</h3>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Subscribe
            </button>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <p>Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
          <p>
            <a href="#" className="hover:text-gray-400">Terms and Conditions</a> | 
            <a href="#" className="hover:text-gray-400"> Privacy Policy</a> | 
            <a href="#" className="hover:text-gray-400"> FAQs</a>
          </p>
        </FooterBottom>
      </div>
    </div>
  );
}

function FooterContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="footer-content"
      className={cn(
        "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4",
        className,
      )}
      {...props}
    />
  );
}

function FooterColumn({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="footer-column"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function FooterBottom({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="footer-bottom"
      className={cn(
        "border-t border-gray-700 text-gray-400 mt-8 flex flex-col items-center justify-between gap-4 pt-4 text-xs sm:flex-row",
        className,
      )}
      {...props}
    />
  );
}

export { Footer, FooterColumn, FooterBottom, FooterContent };
