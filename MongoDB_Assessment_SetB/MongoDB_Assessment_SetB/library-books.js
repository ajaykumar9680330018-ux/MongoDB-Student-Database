// SET B - Scenario B2: Library Books (Updates, Upserts and Deletes)

use('libraryDB');

// Insert records
 db.books.insertMany([
  { _id: 1, title: 'Database Systems', author: 'Elmasri', copies: 5, status: 'available' },
  { _id: 2, title: 'Operating Systems', author: 'Galvin', copies: 3, status: 'available' },
  { _id: 3, title: 'Computer Networks', author: 'Tanenbaum', copies: 0, status: 'unavailable' },
  { _id: 4, title: 'Old Almanac 1990', author: 'Unknown', copies: 0, status: 'unavailable' },
  { _id: 5, title: 'Torn Notes', author: 'Unknown', copies: 0, status: 'damaged' },
  { _id: 6, title: 'Water-damaged Atlas', author: 'Unknown', copies: 1, status: 'damaged' }
 ]);

// Task 1: Add two copies to Operating Systems
 db.books.updateOne(
  { title: 'Operating Systems' },
  { $inc: { copies: 2 } }
 );

// Task 2: Reduce copies when Database Systems is borrowed
 db.books.updateOne(
  { title: 'Database Systems' },
  { $inc: { copies: -1 } }
 );

// Task 3: Upsert Artificial Intelligence book
 db.books.updateOne(
  { title: 'Artificial Intelligence' },
  { $set: { author: 'Russell', copies: 4, status: 'available' } },
  { upsert: true }
 );

// Task 4: Update status and copies together
 db.books.updateOne(
  { title: 'Computer Networks' },
  { $set: { status: 'available' }, $inc: { copies: 3 } }
 );

// Task 5: Delete one matching book
 db.books.deleteOne({ title: 'Old Almanac 1990' });

// Task 6: Delete all damaged or lost books
 db.books.deleteMany({ status: { $in: ['damaged', 'lost'] } });

// Task 7: Display remaining books sorted by title
 db.books.find(
  {},
  { _id: 0, title: 1, copies: 1 }
 ).sort({ title: 1 });
