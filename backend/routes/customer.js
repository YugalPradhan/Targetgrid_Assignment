const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const HUBSPOT_TOKEN=process.env.HUBSPOT_TOKEN;
const axios = require('axios');

//get info of all customers from mongodb
router.get('/get_all_customers', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.send(customers);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
//adding customer to mongodb
router.post('/add_customer', async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).send(customer);
    } catch (error) {
      res.status(400).send(error);
    }
  });

// pushing selected customers to crm
router.post('/push_to_crm', async (req, res) => {
  const hubspotUrl = 'https://api.hubspot.com/crm/v3/objects/contacts';
  const customers = req.body.customers;

  try {
    for (const customer of customers) {
      const hubspotData = {
        properties: {
          phone: customer.phoneNumber,
          firstname: customer.firstName,
          lastname: customer.lastName,
          email: customer.email,
          address: `${customer.street}, ${customer.city}, ${customer.state}, ${customer.zip}`,
          company: customer.organization
        }
      };

      await axios.post(hubspotUrl, hubspotData, {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      //delete customers from mongodb
      await Customer.deleteOne({ _id: customer._id });
    }
    res.status(200).send({ message: 'Customer data pushed to CRM successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to push data to CRM', error: error.message });
  }
});

  module.exports=router;