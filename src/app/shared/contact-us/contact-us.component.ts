import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactNav = [
    {
      title: 'Company',
      options: [
        {
          text: 'About Bookbar',
          navUrl: 'https://www.google.com',
        },
        {
          text: 'What we do ',
          navUrl: 'https://www.google.com',
        },
        {
          text: 'Work with us',
          navUrl: 'https://www.google.com',
        },
        {
          text: 'Contact us',
          navUrl: 'https://www.google.com',
        },
      ],
    },
    {
      title: 'Legal',
      options: [
        {
          text: 'Terms & Conditions',
          navUrl:
            'https://jiobb.jiokhelo.com/asianpaintsshyne1/terms-and-conditions.html',
        },
        {
          text: 'Privacy Policy',
          navUrl: 'https://www.google.com',
        },
      ],
    },
    {
      title: 'Help',
      options: [
        {
          text: 'FAQs',
          navUrl: 'https://jiobb.jiokhelo.com/asianpaintsshyne1/faq.html',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  navigate(url) {
    window.open(url, '_blank');
  }
}
